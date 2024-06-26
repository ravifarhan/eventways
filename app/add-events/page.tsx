import Header from "../components/Header";

const AddEvent = () => {
  return (
    <>
      <Header />
      <div className="bg-white rounded-lg shadow-lg p-4 w-full xl:ml-36 mx-auto max-w-md mt-10">
        <h2 className="text-xl font-semibold mb-4">Buat Jadwal Acara</h2>
        <div className="mb-4">
          <label htmlFor="title">Judul Acara</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Tulis judul acara"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { label: "Nobar Bola ⚽", icon: "⚽" },
            { label: "Makan Malam 🍷", icon: "🍷" },
            { label: "Ulang Tahun 🎂", icon: "🎂" },
            { label: "Acara Perusahaan 🎁", icon: "🎁" },
            { label: "Acara Keluarga 👨‍👩‍👧‍👦", icon: "👨‍👩‍👧‍👦" },
          ].map((item) => (
            <button
              key={item.label}
              className="bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="description">Deskripsi</label>
          <textarea
            name="description"
            id="description"
            placeholder="Tulis deskripsi acara"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div className="flex justify-between mt-4">
          <button className="text-gray-600 hover:underline">Back</button>
          <button className="bg-green-500 text-white rounded-full py-2 px-6 hover:bg-green-600">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
