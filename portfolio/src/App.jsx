// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />

      <main className="p-6 space-y-16">
        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default App;
