import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
          <p className="mt-4 text-xl">Browse our listings to find the perfect home for you</p>
          <div className="mt-8 flex space-x-4">
            <Input placeholder="Location" className="w-64" />
            <Input placeholder="Property Type" className="w-64" />
            <Input placeholder="Price Range" className="w-64" />
            <Button variant="primary">Search</Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((property) => (
            <Card key={property}>
              <img src="/placeholder.svg" alt="Property" className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle>Beautiful Family House</CardTitle>
                <p>$500,000</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">We are committed to helping you find the perfect home. Our mission is to provide exceptional service and value to our clients.</p>
        <img src="/placeholder.svg" alt="About Us" className="mt-8 mx-auto h-64 w-full object-cover" />
      </section>

      {/* Testimonials */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial}>
              <CardHeader className="flex items-center space-x-4">
                <Avatar src="/placeholder.svg" alt="Client" className="h-12 w-12" />
                <div>
                  <CardTitle>John Doe</CardTitle>
                  <p>Happy Client</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>"This company helped me find my dream home. I couldn't be happier with their service!"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone Number" />
          </div>
          <Textarea placeholder="Message" className="w-full" />
          <Button variant="primary">Send Message</Button>
        </form>
        <div className="mt-8">
          <img src="/placeholder.svg" alt="Map" className="mx-auto h-64 w-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Index;