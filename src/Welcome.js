

export default function Welcome(){
    if(localStorage.getItem('isLoggedIn')){
        return(
        <div style={{height:'380px', fontWeight:'500', textAlign:'center', marginTop:'20px'}}>
           Welcome to the page {localStorage.getItem('firstName')}.
        </div>
        );
    }
    else{
    return(
        <div style={{height:'380px', fontWeight:'500', textAlign:'center', marginTop:'20px'}}>
           Please log In to view this page
        </div>
    )
}
}