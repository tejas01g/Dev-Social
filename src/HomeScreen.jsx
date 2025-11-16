import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const stories = [
  { id: 1, name: "Tejasvi", img: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Rahul", img: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Ankit", img: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Maya", img: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Priya", img: "https://i.pravatar.cc/150?img=5" },
];

const posts = [
  {
    id: 1,
    username: "Tejasvi",
    time: "2h ago",
    avatar: "https://i.pravatar.cc/150?img=1",
    image: "https://picsum.photos/600/600",
    caption: "Building Dev Social App 🚀🔥",
  },
  {
    id: 2,
    username: "Rahul",
    time: "5h ago",
    avatar: "https://i.pravatar.cc/150?img=3",
    image: "https://picsum.photos/500/600",
    caption: "Working on my new React Native project!",
  }
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8FAFC" }}>

      {/* Title */}
      <View style={styles.title}>
        <Text style={styles.titletext}>Dev Social</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* STORIES SECTION */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storyContainer}
        >
          {stories.map((item) => (
            <View key={item.id} style={styles.storyItem}>
              <Image
                source={{ uri: item.img }}
                style={styles.storyImage}
              />
              <Text style={styles.storyName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* POSTS SECTION */}
        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>

            {/* Post Header */}
            <View style={styles.postHeader}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.time}>{post.time}</Text>
              </View>
            </View>

            {/* Image */}
            <Image
              source={{ uri: post.image }}
              style={styles.postImage}
            />

            {/* Buttons */}
            <View style={styles.actionRow}>
              <TouchableOpacity>
                <Text style={styles.actionBtn}>❤️</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.actionBtn}>💬</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.actionBtn}>↗️</Text>
              </TouchableOpacity>
            </View>

            {/* Caption */}
            <Text style={styles.caption}>
              <Text style={{ fontWeight: "bold" }}>{post.username}: </Text>
              {post.caption}
            </Text>

          </View>
        ))}

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  titletext: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },

  /* STORIES */
  storyContainer: {
    paddingVertical: 15,
    paddingLeft: 10,
  },
  storyItem: {
    marginRight: 18,
    alignItems: "center",
  },
  storyImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#0EA5E9",
  },
  storyName: {
    fontSize: 12,
    marginTop: 5,
    color: "#333",
  },

  /* POSTS */
  postCard: {
    backgroundColor: "#fff",
    marginVertical: 10,
    borderRadius: 12,
    width: "95%",
    alignSelf: "center",
    overflow: 'hidden',
    elevation: 2,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 15,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },

  postImage: {
    width: "100%",
    height: 350,
  },

  actionRow: {
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  actionBtn: {
    fontSize: 24,
  },

  caption: {
    paddingHorizontal: 10,
    paddingBottom: 12,
    color: "#333",
  },
});
