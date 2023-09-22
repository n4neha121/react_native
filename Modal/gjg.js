const renderItem = ({item, index}) => {
  const isPost = 'title' in item && 'body' in item;
  // console.log(item, 'fgwkxmaj');
  return (
    <View style={isPost ? styles.postContainer : styles.tagContainer}>
      {isPost ? (
        <>
          <Button
            title="Show Data"
            onPress={() => {
              setData(() => ({
                ...data,
                id: item.id,
                body: item.body,
                title: item.title,
                userId: item.userId,
                tags: item.tags,
              }));
              setSelectedItemId(item.id);
              setModalVisible(true);
            }}
          />
        </>
      ) : (
        <>
          <Text style={{color: 'darkgreen'}}>Reactions: {item.reactions}</Text>
          {/* Display additional data for tags here */}
        </>
      )}
    </View>
  );
};
