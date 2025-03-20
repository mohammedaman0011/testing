// Admin Panel API Integration

const API_BASE_URL = '/api/admin';

// Product Management API
const productAPI = {
    getAllProducts: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/products`);
            if (!response.ok) throw new Error('Failed to fetch products');
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    createProduct: async (productData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            });
            if (!response.ok) throw new Error('Failed to create product');
            return await response.json();
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    updateProduct: async (id, productData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData)
            });
            if (!response.ok) throw new Error('Failed to update product');
            return await response.json();
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    },

    deleteProduct: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/products/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) throw new Error('Failed to delete product');
            return true;
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    },

    updateInventory: async (id, inventory) => {
        try {
            const response = await fetch(`${API_BASE_URL}/products/${id}/inventory`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ stock: inventory })
            });
            if (!response.ok) throw new Error('Failed to update inventory');
            return await response.json();
        } catch (error) {
            console.error('Error updating inventory:', error);
            throw error;
        }
    }
};

// Order Management API
const orderAPI = {
    getAllOrders: async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/orders`);
            if (!response.ok) throw new Error('Failed to fetch orders');
            return await response.json();
        } catch (error) {
            console.error('Error fetching orders:', error);
            throw error;
        }
    },

    getOrdersByStatus: async (status) => {
        try {
            const response = await fetch(`${API_BASE_URL}/orders/status/${status}`);
            if (!response.ok) throw new Error('Failed to fetch orders by status');
            return await response.json();
        } catch (error) {
            console.error('Error fetching orders by status:', error);
            throw error;
        }
    },

    updateOrderStatus: async (id, status) => {
        try {
            const response = await fetch(`${API_BASE_URL}/orders/${id}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status })
            });
            if (!response.ok) throw new Error('Failed to update order status');
            return await response.json();
        } catch (error) {
            console.error('Error updating order status:', error);
            throw error;
        }
    },

    getOrderAnalytics: async (startDate, endDate) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/orders/analytics?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`
            );
            if (!response.ok) throw new Error('Failed to fetch order analytics');
            return await response.json();
        } catch (error) {
            console.error('Error fetching order analytics:', error);
            throw error;
        }
    }
};

// Export the API modules
export { productAPI, orderAPI };