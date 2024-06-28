


export default function ContactPage({ params }: { params: { id: string } })  {
  return (
    <div className="container mx-auto p-4" style={{ backgroundColor: "#1f1f1f" }}>
      <h1 className="text-3xl font-bold mb-6">O nas {params.id}</h1>
      
    </div>
  );
};
