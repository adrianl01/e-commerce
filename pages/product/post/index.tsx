import { Body } from "@/ui/typography/inter";
import Form from "next/form";

export default function PostProductPage() {
  const formHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const images = e.target.images.value;
    const productData = {
      title,
      description,
      price: parseFloat(price),
      category,
      images: [images],
    };
    console.log(productData);
  };

  return (
    <Body>
      <div className="w-full h-full flex items-center justify-center">
        <Form
          action=""
          onSubmit={formHandler}
          className="max-w-72 flex flex-col gap-4 border-solid border-2 p-4 m-4 rounded-lg bg-slate-500 text-white"
        >
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
          <input type="number" name="price" placeholder="Price" />
          <input type="text" name="category" placeholder="Category" />
          <input type="text" name="images" placeholder="Image URL" />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Post Product
          </button>
        </Form>
      </div>
    </Body>
  );
}
