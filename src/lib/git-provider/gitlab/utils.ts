export function mapState(glState: string) {
  switch (glState) {
    case "opened":
      return "open";
    default:
      return glState;
  }
}
