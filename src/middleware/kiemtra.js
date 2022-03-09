exports.kiemTra = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
       console.log("Vào Thành Công");
       next();
    }else{
       console.log("Vào Thất Bại");
       res.redirect("/");
    }
 }