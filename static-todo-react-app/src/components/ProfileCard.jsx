export default function ProfileCard({name, age, bio}) {   //○ Define a ProfileCard functional component that accepts props for name, age, and bio.
   
    // ○ Render the data dynamically using props.
    return(
       <div className="profilecard">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>

       </div>
        
    );
}



