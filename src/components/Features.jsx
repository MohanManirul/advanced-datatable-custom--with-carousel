import React from "react";

const Features = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>

        <div className="grid gap-8 md:grid-cols-3">


          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">
              BJS & Bar Exam Preparation
            </h4>
            <p>
              জুডিসিয়াল সার্ভিসে বা Bar Council Exam দিয়ে এ্যাডভোকেট / উকিল
              হিসেবে ক্যারিয়ার
            </p>
          </div>

           <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">আমার উকিল</h4>
            <p>আপনার কাছাকাছি থাকা উকিল খুঁজুন</p>
          </div>

            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">আমার কথা</h4>
            <p>সামাজিক যোগাযোগ মাধ্যমে কথা বলুন , বন্ধু বাড়ান </p>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Features;
