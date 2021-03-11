# Health+

**About Health+**

The idea of Health+ was to create a network among hospitals and patients to book appointments in a very efficient and effective manner with queue system without all the unneccessary in person formalities for booking. We would then create an ML model to suggest the most optimised hospital near the user based on the factors mentioned below.
There would be an Emergency button on the navbar for instant booking based on the availability.

**This is our solution to create a contactless environment.**

**There would be 2 types of users :**
1.Patient : They would feed the data into our server so that they can have almost instant booking whenever they need.
2.Medical institution : They would provide the details of the doctors, treatments, departments, pricing and the time slots available for booking the appointments for the users.

After feeding all of this data, the idea was to implement it in google maps do that we could help users navigate to the most optimised hospital at the time of appointment/Emergency.

For the optimisation we considered the following factors:
1.Distance
2.Pricing
3.Reputation(Recommendation)
4.Availability of doctors
5.Availability of beds

**How to run the app:**

To run this app clone this repository (Branch : Health+).
Then go into the Frontend folder and write npm i in the command line interface to install all the dependencies and write npm start to run the React server on port 3000(Proxy: port 4000).

Similarly, In the backend1.0 folder write npm i to install all the dependencies and then write node server.js to run the Express server on port 4000.

**P.S.**
The Basic prototype is ready.We are successfully fetching data from our backend, we just need some more data to get our app running.
We were not able to complete the routing of the pages so they are stacked on top of each other right now.

**Made By:**
1.Nitin Solanki
2.Keshav Goyal
3.Saurabh Tiwari
4.Suraj Kumar
5.Aditya Rai
