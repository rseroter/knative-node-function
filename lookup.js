module.exports = function (customerid) {

    console.log(customerid);

    //TODO do database lookup
    
    //return static results
    var customer = {id: customerid, name:'Richard', title:'phony developer'};

    return JSON.stringify(customer);
}