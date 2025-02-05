import ItemList from "./item-list";

function Page() {
  return (
    <main className="max-w-lg mx-auto mt-10 p-4 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;
