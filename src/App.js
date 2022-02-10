import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import profileData from './data/profile-user.json';
import Statistics from './components/Statistics/Statistics';
import data from './data/data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
export default App;
