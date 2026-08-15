import RouteTracker from "./Components/tracking/RouteTracker";

export default function Template({ children }) {
  return (
    <>
      <RouteTracker />
      {children}
    </>
  );
}
