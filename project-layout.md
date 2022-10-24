# FakeIG

Home Page 

Components:

    1. Login Screen / loginPage
        > Picture on Left Side
        > Login Form on the Right
        > Continue as Guest
        > Could use Firebase Auth

    2. Loading Screen when Logging In / loadingPage

    3. Navbar
        > Company Logo
            - Dropdown with Following/Favorites
        > Search Bar / Collapse after max-width is too small
        > List of Anchors
            - Home
            - Inbox (show # of notifications until read)
            - Add Content
            - Explore
            - Activity
            - Profile Button
                * Dropdown
                    -> Profile
                    -> Log Out
    
    4. Posts
        > Header from left to right
            - Poster's Profile Img 
            - Poster's Account Name
            - Three Dot Icon
        > Image
        > Action Bar
            - Heart
            - Comment
            - DM
        > Amount of Likes
        > Poster's Account Name & Message
        > View All Coments
        > Recent Comments
        


DM Page (split into left and right)

Components:

    Left Section
        > Account Name / Compose Message Icon
        > Previous Messages Sent
            - Account Names of Sender / Receiver
            - Messages do not need to be described: "Sent you a message" is good...

    Right Section
        Default:
        > Your Messages
        > Send private photos and messages
        > Send Message (Same functionality with Compose Message Button)

        When user clicks a message:
        > Shows messages between the two users
        > Allows users to send messages, pictures, emojis, and heart emoji



Profile Page

Components:

    Top Section
        Left Side
            > Profile Picture that spans 3 vertical sections
        Right Side
            > Account Name
            > Edit Profile
            > Settings
            -----
            > ${postsAmount} posts
            > ${followersAmount} followers
            > ${followingAmount} following
            -----
            Name

    Bottom Section
        Posts / Saved / Tagged

        Posts Section


State:

    userSignedIn

    > if userSignedIn === true
        - can like posts
        - can comment
        - can DM (cloud messaging)
    
    > if userSignedIn === false
        - when clicking like, comment, save, or DM button...
            * notify the user to sign up to complete the action

    user

    > object that holds user ID, user likes, and allows access to DMs




