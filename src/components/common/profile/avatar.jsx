
export default function Avatar({ user }) {
    if (user) {
        return user && (
            <div
            style={{
              width: '25px',
              height: '25px',
              borderRadius: '50%',
              backgroundColor: user.avatarColor, // Dynamic color
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white', // Ensure the initial is visible
              fontSize: '18px', // Adjust font size as needed
            }}
          >
            {user.avatarInitial}
          </div>
        );
      }
}
