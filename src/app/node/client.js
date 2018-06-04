// {

//  this.http.post('localhost/3000',newAssessment, options) // ...using post request
// .map((res:Response) => res.`json()) // ...and calling .json() on the response to return data
// .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

// }   


fromAngular = {
    intent: "Hello",
    entities: {
        revenueState: "",
        revenueProperty: "",
        account: "",
        verticle: "",
        sbu: "",
        timeline: ['Q1','Q2'],
        number: ""
    }
}



let lookup={
sbu:"",
verticals:"",
accounts:"",
timeline:[],
revenuelevel:'',

number:'',



}

creatingApis(intent){
    let port='localhost:3000/'+intent;
    let api=port;
    for (each in lookup){
        if(typeof(each.value)=='string'){
            api+='/'+each.value

        }
        else (typeof (each.value) == 'object' && each.length > 0)
       { each.value.forEach(element => {
            api += "/" +element
           });
    }
    this.http.get(api);
    


}
}

)