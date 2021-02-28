const UsersList = ({ users }) => {
  console.log(users);
  return 'all users';
};

export default UsersList;

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
      props: {
        users: data
      }
    };
  } catch (e) {
    console.log(e);
  }
};
