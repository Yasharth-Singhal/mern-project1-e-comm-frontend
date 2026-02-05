import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Text,
	VStack,
} from "@chakra-ui/react";

import {
	DialogRoot,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogBody,
	DialogFooter,
	DialogTitle,
	DialogCloseTrigger,
} from "../dialog";

import { FiEdit, FiTrash } from "react-icons/fi";
import { toaster } from "../toaster";
import { useProductStore } from "../../../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const { deleteProduct, updateProduct } = useProductStore();

	// DELETE
	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);

		toaster.create({
			title: success ? "Success" : "Error",
			description: message,
			type: success ? "success" : "error",
		});
	};

	// UPDATE
	const handleUpdateProduct = async (pid) => {
		const { success, message } = await updateProduct(pid, updatedProduct);

		toaster.create({
			title: success ? "Success" : "Error",
			description: message,
			type: success ? "success" : "error",
		});
	};

	return (
		<Box
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			transition="all 0.3s"
			_hover={{ transform: "translateY(-6px)", shadow: "2xl" }}
			bg="bg.surface"
		>
			<Image
				src={product.image}
				alt={product.name}
				h={48}
				w="full"
				objectFit="cover"
				fallbackSrc="https://via.placeholder.com/300"
			/>

			<Box p={4}>
				<Heading size="md" mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight="bold" fontSize="xl" color="fg.muted" mb={4}>
					${product.price}
				</Text>

				<HStack spacing={3}>
					{/* EDIT BUTTON */}
					<DialogRoot>
						<DialogTrigger asChild>
							<IconButton
								colorScheme="red"
								aria-label="Edit Product"
							>
								<FiEdit />
							</IconButton>
						</DialogTrigger>

						<DialogContent>
							<DialogHeader>
								<DialogTitle>Update Product</DialogTitle>
							</DialogHeader>

							<DialogCloseTrigger />

							<DialogBody>
								<VStack spacing={4}>
									<Input
										placeholder="Product Name"
										value={updatedProduct.name}
										onChange={(e) =>
											setUpdatedProduct({
												...updatedProduct,
												name: e.target.value,
											})
										}
									/>

									<Input
										type="number"
										placeholder="Price"
										value={updatedProduct.price}
										onChange={(e) =>
											setUpdatedProduct({
												...updatedProduct,
												price: Number(e.target.value),
											})
										}
									/>

									<Input
										placeholder="Image URL"
										value={updatedProduct.image}
										onChange={(e) =>
											setUpdatedProduct({
												...updatedProduct,
												image: e.target.value,
											})
										}
									/>
								</VStack>
							</DialogBody>

							<DialogFooter>
								<Button
									colorScheme="blue"
									w="full"
									onClick={() =>
										handleUpdateProduct(product._id)
									}
								>
									Update Product
								</Button>
							</DialogFooter>
						</DialogContent>
					</DialogRoot>

					{/* DELETE BUTTON */}
					<IconButton
						colorScheme="red"
						aria-label="Delete Product"
						onClick={() => handleDeleteProduct(product._id)}
					>
						<FiTrash />
					</IconButton>
				</HStack>
			</Box>
		</Box>
	);
};

export default ProductCard;
