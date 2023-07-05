import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const TeamCard = ({ team }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{team.country}</Text>
      <Text>{`FIFA Code: ${team.fifa_code}`}</Text>
      <Text>{`FIFA Rank: ${team.fifa_rank}`}</Text>
      {/* Add more data fields as needed */}
    </View>
  );
};

const AppTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://worldcup.sfg.io/teams");
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  return (
    <View style={styles.container}>
      {teams.map((team) => (
        <TeamCard key={team.fifa_code} team={team} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    width: "100%",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default AppTeam;
