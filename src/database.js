const mongoose =require('mongoose');
mongoose.connect("mongodb+srv://elieldiazgalindo:LuckierUwU05@clusteruwu.eo9iri1.mongodb.net/farmaciadb?retryWrites=true&w=majority")
.then(db=>console.log("Mongodb connected..."))
.catch(err=>console.error(err));
