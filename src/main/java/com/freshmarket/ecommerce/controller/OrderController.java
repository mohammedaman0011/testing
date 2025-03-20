package com.freshmarket.ecommerce.controller;

import com.freshmarket.ecommerce.model.Order;
import com.freshmarket.ecommerce.model.OrderStatus;
import com.freshmarket.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
@io.swagger.v3.oas.annotations.tags.Tag(name = "Orders", description = "Operations for managing customer orders and order processing")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/cod")
    public ResponseEntity<Order> createCodOrder(@RequestBody Order order) {
        order.setPaymentMethod("COD");
        Order createdOrder = orderService.createOrder(order);
        return ResponseEntity.ok(createdOrder);
    }

    @PutMapping("/{id}/confirm-cod")
    public ResponseEntity<Order> confirmCodOrder(@PathVariable Long id) {
        Order order = orderService.updateOrderStatus(id, OrderStatus.CONFIRMED);
        return ResponseEntity.ok(order);
    }

    @PutMapping("/{id}/delivery-complete")
    public ResponseEntity<Order> completeDeliveryAndPayment(@PathVariable Long id) {
        Order order = orderService.updateOrderStatus(id, OrderStatus.DELIVERED);
        return ResponseEntity.ok(order);
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(orderService.getOrdersByUserId(userId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return orderService.getOrderById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.createOrder(order));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Order> updateOrderStatus(
            @PathVariable Long id,
            @RequestParam OrderStatus status) {
        return ResponseEntity.ok(orderService.updateOrderStatus(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.ok().build();
    }
}