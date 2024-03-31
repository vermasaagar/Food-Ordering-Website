

const Contact = () =>{
    return(
        <div className="h-screen bg-slate-600 p-20 text-white ">
            <h2 className="text-xl">Help & Support</h2>
            <h5 className="text-xl">Let's take a step ahead and help you</h5>
            <div className="flex justify-evenly bg-slate-300 mt-4 w-10/12 text-black">
                <div className="bg-blue-200 p-4 mt-8">

                  <h3>Partner Onboarding</h3>
                  <h3>Legal</h3>
                  <h3>FAQs</h3>
                </div>

                <div className="mt-8 p-4">
                    <h1 className="font-xl font-bold">Partner Onboarding</h1>
                    <ul className="my-4">
                        <li>I want to partner my restaurant with Swiggy</li>
                        <li>What Are the mandatory documents needed to list my restaurant on Swiggy ?</li>
                        <li>I want to opt-out from Google reserve</li>
                        <li>After i submit all documents, how long will it take for my restaurant to go live on swiggy ?</li>
                        <li>What is this one time Onboarding fees? Do i have to pay for it while registering ?</li>
                        <li>Who should i contact if i need help and support in getting onboarded</li>
                        <li>How much commission will i be charged by swiggy ?</li>
                        <li>I don't have an FSSAI licence for my restaurants. Can it still be Onboarding</li>

                        
                    </ul>

                </div>

            </div>
           
        </div>
    )
}

export default Contact;