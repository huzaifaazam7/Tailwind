import { Link } from "react-router-dom"

const Third = () => {
    return (
      <div >
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg> */}
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">About!</h2>
        <p class="leading-relaxed text-base">Welcome to Victory, where we are committed to delivering high-quality products and services that exceed expectations. Our journey began with a vision to provide innovative solutions that make a positive impact on our customers lives. At Victory, we value integrity, passion, and customer satisfaction above all else. Our team works tirelessly to bring you the best, always striving for excellence and growth. We are dedicated to ensuring that every product and service we offer contributes to your success and satisfaction, building a legacy of trust and reliability.</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </a>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Frequently Asked Questions:</h2>
        <p class="leading-relaxed text-base">At Victory, we believe that a clear understanding of our services and products is essential for a seamless experience. Our Frequently Asked Questions (FAQ) section is designed to address common queries and provide the information you need. Whether youre curious about our product features, delivery timelines, return policies, or payment options, we've got you covered. If you don't find what you're looking for, dont hesitate to reach out to our customer service team for personalized assistance. Were here to ensure you have all the details you need for a smooth journey with us</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </a>
      </div>
      <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      </div>
    </div>
    <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
        {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg> */}
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-lg title-font font-medium mb-2"> Contact</h2>
        <p class="leading-relaxed text-base">Were always here to help! If you have any questions, concerns, or need further assistance, our Contact page is the best way to reach us. You can get in touch with us through email, phone, or by filling out the contact form on our website. Our friendly and knowledgeable team is ready to provide you with prompt, professional support. Whether you're seeking more information about our products, services, or need help with an order, we're here to make your experience as smooth as possible. Thank you for choosing Victory—we look forward to connecting with you!</p>
        <a class="mt-3 text-indigo-500 inline-flex items-center">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </a>
      </div>
    </div>
    <Link to="/">
    <button class="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Click Here To Go To Home Page!</button>
    </Link>
  </div>
  
</section>
      </div>
    )
  }
  
  export default Third