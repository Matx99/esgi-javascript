function type_check_v1(value, type){
    if(typeof value === undefined || value == null || type === undefined || type == null) return "";
    if(typeof value == type) return true;
    else return "both areguments are not same type";
}

console.log(type_check_v1(false, "boolean"));