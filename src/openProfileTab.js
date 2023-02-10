function openProfileTab(platform, username) {
  let url;
  switch (platform) {
    case "github":
      url = `https://github.com/${username}`;
      break;
    case "linkedin":
      url = `https://linkedin.com/in/${username}`;
      break;
    case "discord":
      url = `https://discord.com/${username}`;
      break;
    case "viber":
      url = `https://viber.com/${username}`;
      break;
    case "facebook":
      url = `https://facebook.com/${username}`;
      break;
    default:
      return console.error(`Invalid platform: ${platform}`);
  }
  window.open(url, "_blank");
}
export default openProfileTab;
