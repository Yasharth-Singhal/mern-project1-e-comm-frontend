


// import { create } from "zustand";

// export const useProductStore = create((set) => ({

// 	products: [],
// 	loading: false,

// 	setProducts: (products) => set({ products }),

// 	// ✅ CREATE
// 	createProduct: async (newProduct) => {

// 		if (!newProduct.name || !newProduct.image || !newProduct.price) {
// 			return { success: false, message: "Please fill in all fields." };
// 		}

// 		set({ loading: true });

// 		try {

// 			const res = await fetch("/api/products", {
// 				method: "POST",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify(newProduct),
// 			});

// 			const data = await res.json();

// 			set((state) => ({
// 				products: [...state.products, data.data],
// 				loading: false,
// 			}));

// 			return { success: true, message: "Product created successfully" };

// 		} catch (error) {

// 			set({ loading: false });

// 			return { success: false, message: "Network error" };
// 		}
// 	},

// 	// ✅ FETCH
// 	fetchProducts: async () => {

// 		set({ loading: true });

// 		try {

// 			const res = await fetch("/api/products");
// 			const data = await res.json();

// 			set({
// 				products: data.data || [],
// 				loading: false,
// 			});

// 		} catch (error) {

// 			set({ loading: false });
// 			console.log("Fetch error:", error);
// 		}
// 	},

// 	// ✅ DELETE
// 	deleteProduct: async (pid) => {

// 		set({ loading: true });

// 		try {

// 			const res = await fetch(`/api/products/${pid}`, {
// 				method: "DELETE",
// 			});

// 			const data = await res.json();

// 			if (!data.success) {
// 				set({ loading: false });
// 				return { success: false, message: data.message };
// 			}

// 			set((state) => ({
// 				products: state.products.filter((p) => p._id !== pid),
// 				loading: false,
// 			}));

// 			return { success: true, message: data.message };

// 		} catch (error) {

// 			set({ loading: false });
// 			return { success: false, message: "Network error" };
// 		}
// 	},

// 	// ✅ UPDATE
// 	updateProduct: async (pid, updatedProduct) => {

// 		set({ loading: true });

// 		try {

// 			const res = await fetch(`/api/products/${pid}`, {
// 				method: "PUT",
// 				headers: { "Content-Type": "application/json" },
// 				body: JSON.stringify(updatedProduct),
// 			});

// 			const data = await res.json();

// 			if (!data.success) {
// 				set({ loading: false });
// 				return { success: false, message: data.message };
// 			}

// 			set((state) => ({
// 				products: state.products.map((product) =>
// 					product._id === pid ? data.data : product
// 				),
// 				loading: false,
// 			}));

// 			return { success: true, message: data.message };

// 		} catch (error) {

// 			set({ loading: false });
// 			return { success: false, message: "Network error" };
// 		}
// 	},
// }));
import { create } from "zustand";

// ✅ HARD CODED BACKEND URL
const API_URL = "https://backend-product-zc5m.onrender.com";

export const useProductStore = create((set) => ({

	products: [],
	loading: false,

	setProducts: (products) => set({ products }),

	// ✅ CREATE PRODUCT
	createProduct: async (newProduct) => {

		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}

		set({ loading: true });

		try {

			const res = await fetch(`${API_URL}/api/products`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newProduct),
			});

			const data = await res.json();

			set((state) => ({
				products: [...state.products, data.data],
				loading: false,
			}));

			return { success: true, message: "Product created successfully" };

		} catch (error) {

			set({ loading: false });

			return { success: false, message: "Network error" };
		}
	},

	// ✅ FETCH PRODUCTS
	fetchProducts: async () => {

		set({ loading: true });

		try {

			const res = await fetch(`${API_URL}/api/products`);
			const data = await res.json();

			set({
				products: data.data || [],
				loading: false,
			});

		} catch (error) {

			set({ loading: false });
			console.log("Fetch error:", error);
		}
	},

	// ✅ DELETE PRODUCT
	deleteProduct: async (pid) => {

		set({ loading: true });

		try {

			const res = await fetch(`${API_URL}/api/products/${pid}`, {
				method: "DELETE",
			});

			const data = await res.json();

			if (!data.success) {
				set({ loading: false });
				return { success: false, message: data.message };
			}

			set((state) => ({
				products: state.products.filter((p) => p._id !== pid),
				loading: false,
			}));

			return { success: true, message: data.message };

		} catch (error) {

			set({ loading: false });
			return { success: false, message: "Network error" };
		}
	},

	// ✅ UPDATE PRODUCT
	updateProduct: async (pid, updatedProduct) => {

		set({ loading: true });

		try {

			const res = await fetch(`${API_URL}/api/products/${pid}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(updatedProduct),
			});

			const data = await res.json();

			if (!data.success) {
				set({ loading: false });
				return { success: false, message: data.message };
			}

			set((state) => ({
				products: state.products.map((product) =>
					product._id === pid ? data.data : product
				),
				loading: false,
			}));

			return { success: true, message: data.message };

		} catch (error) {

			set({ loading: false });
			return { success: false, message: "Network error" };
		}
	},
}));
