# Use Maven with Java 17 as the base image
FROM maven:3.9.6-eclipse-temurin-17-focal AS builder

# Set the working directory
WORKDIR /app

# Copy the POM file first to cache dependencies
COPY pom.xml .

# Download dependencies and plugins (this layer will be cached)
RUN --mount=type=cache,target=/root/.m2/repository \
    mvn dependency:go-offline

# Copy the rest of the application
COPY . .

# Build the application with caching
RUN --mount=type=cache,target=/root/.m2/repository \
    mvn clean package -DskipTests

# Use Java runtime for the final image
FROM eclipse-temurin:17-jre-focal

WORKDIR /app

# Copy the built artifact from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Set the startup command
ENTRYPOINT ["java", "-jar", "app.jar"]