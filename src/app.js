const express =require("express");
const app = express(); 
const hbs = require("hbs");
const path =require("path");
const port =process.env.PORT || 2300;
//   public static path
const staticPAth = path.join(__dirname ,"../public");
const templatePath = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials")

hbs.registerPartials(partial_path);
app.set("view engine", "hbs");
app.set("views" , templatePath)

app.use(express.static(staticPAth));

app.get("/",(req,res) =>{
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
// app.get("*", (req, res) => {
//     res.render ("404error",{
//         errorMsg: "Oops Page Not Found"
//     });
// });
app.listen(port , () =>{
    console.log(`listning port ${port }`);
});