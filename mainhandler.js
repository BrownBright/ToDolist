
exports.delete_item = function delete_item(items, index , res){
    items.splice(index, 1);
    res.redirect("/");
}


exports.add_item = function add_item(items , item , req , res ){
        if (item === "") {
        res.redirect("/");
    }else {
           items.push(item);
        res.redirect("/");
        }
}