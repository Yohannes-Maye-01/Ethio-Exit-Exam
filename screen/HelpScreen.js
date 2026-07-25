const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 24,
  },

  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,

    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // Android Shadow
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2563EB",
    marginBottom: 10,
  },

  sectionContent: {
    fontSize: 16,
    color: "#475569",
    lineHeight: 26,
  },
});
