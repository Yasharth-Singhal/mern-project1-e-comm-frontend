import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { toaster } from "../toaster";
import { useProductStore } from "../../../store/product";

const CreatePage = () => {

	const [newProduct, setNewProduct] = useState({
		name: "",
		price,
		image: "",
	});

	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {

		const { success, message } = await createProduct(newProduct);

		toaster.create({
			title: success ? "Success" : "Error",
			description: message,
			type: success ? "success" : "error",
		});

		setNewProduct({
			name: "",
			price: "",
			image: "",
		});
	};

	return (
		<Container maxW="container.sm">
			<VStack spacing={8}>
				
				<Heading textAlign="center" size="2xl">
					Create New Product
				</Heading>

				<Box
					w="full"
					bg="bg.surface"
					p={6}
					rounded="lg"
					shadow="md"
				>
					<VStack spacing={4}>

						<Input
							placeholder="Product Name"
							value={newProduct.name}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									name: e.target.value,
								})
							}
						/>

						<Input
							placeholder="Price"
							type="number"
							value={newProduct.price}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									price: Number(e.target.value),
								})
							}
						/>

						<Input
							placeholder="Image URL"
							value={newProduct.image}
							onChange={(e) =>
								setNewProduct({
									...newProduct,
									image: e.target.value,
								})
							}
						/>

						<Button
							colorScheme="blue"
							onClick={handleAddProduct}
							w="full"
						>
							Add Product
						</Button>

					</VStack>
				</Box>

			</VStack>
		</Container>
	);
};

export default CreatePage;
