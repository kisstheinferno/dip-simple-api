let host = window.location.hostname;

if (host === "localhost") {
  host = "localhost:3000";
}

export { host };
