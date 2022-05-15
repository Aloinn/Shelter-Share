# Try it out!

https://homeless-help-867a4.firebaseapp.com/

## 💡Inspiration
More than 235,000 Canadians experience homelessness in any given year. In Toronto shelters, there is a 98% occupancy rate every night [1]. Shelters more than ever are in need of extra supplies.

The reality is, no one is safe from experiencing homelessness. There are a number of reasons that may cause a person to end up living on the streets or in a shelter, some of these include but are not limited to: rising cost of living, mental illness, and domestic violence and abuse.

**We build Shelter Share because we wanted to support shelters and charities by making it easy and accessible for other people to donate old clothing and supplies.**

Often times, throwing away old clothes and unused supplies is much more convenient than packing it all up and heading down 3-4 blocks to drop it off at a donation box. We wanted to help promote repurposing over throwing away by making donating more accessible and convenient.

**Help dress those with less.**

[1] https://www.fredvictor.org/facts-about-homelessness-in-toronto/

## 😮 What it does
Shelter Share is a web (and soon-to-be mobile) application designed to make donating old clothes and unused supplies quick and easy.

We do this by providing individuals who are currently considering throwing sections of their closets into the dumpster with a more convenient alternative - pinging a shelter/volunteer to take all the clothing off their hands.

Users can send a ‘donation pick-up’ request and describe the contents of their donation to our platform. Nearby shelters and charities may choose to accept the request and send one of their volunteers or one of our platform’s volunteers as couriers to pick up the donation.

If you wanted to help out but don’t have any donations, you could join our platform and volunteer as a donations courier and help deliver local contributions to nearby shelters.

Shelter Share also tracks individual contributions which leaves room for implementing donation incentives in the future such as raffles, retail discounts, and public shoutouts.


## 🔨How we built it
We built our web application using Vue.js with Quasar for the frontend and Firebase for the backend.

For our database, we used Firestore to manage user info, shelter info, and donation pickup request info.

From Google Cloud, we used the Google Maps JS API, Places API, and Geocoding API.

Google Maps was used as a means for donators on our site to select nearby shelters they would like to donate to. It was also used so that shelters on our platform can see where the pickup requests originated from.

Google Geocoding was used to allow shelters to submit their address and have the address automatically converted into latitude/longitude coordinates for the Google Maps view.

## 😰 Challenges we ran into
Some of our group members were new to using this framework. Due to limited time, we had to refer to lots of online documentation and video tutorials as we coded. Learning the different tags/classes or running into familiar errors while running the code was a huge challenge we had to overcome. With the help of some of our more experienced members, they explained what certain code does or how to efficiently implement our components, and together we were able to successfully complete the project.

## 😤 Accomplishments that we're proud of
We were proud of creating a fully functional product and implementing Google Maps API into our project. Under the time constraints, we were able to successfully collaborate as a team, while still having time for breaks and participating in the social activities in between. We are also proud of our ability to create a fully functional web application, and connect to databases while making it accessible and responsive.

## 🧠 What we learned
Through this hackathon, some of our team members were able to learn Vue.js and Quasar over the span of a weekend. Additionally, we all learned how to properly distribute work as a team, as we were able to distribute the workload equally under the time pressure. 

## 💜 What's next for Shelter Share
In the future, we’d love to launch this product and scale the product horizontally, and have a mobile app for this product as well.


