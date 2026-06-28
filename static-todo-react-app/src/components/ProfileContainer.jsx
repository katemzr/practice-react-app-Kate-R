import ProfileCard from "./ProfileCard";

export default function ProfileContainer() {   
   
    return(
        <span>
            <h1>User Profiles</h1>
            <ProfileCard name = "James" age = "46" bio ="A software engineer who loves swimming." />
            <ProfileCard name = "Vincent" age = "5" bio ="A software engineer who loves preschool." />
            <ProfileCard name = "Alex" age = "25" bio ="A software engineer who loves hiking." />
        </span>
    );
}