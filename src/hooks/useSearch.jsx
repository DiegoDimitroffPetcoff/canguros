import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = search === "";
      return;
    }
    if (search === "") {
      setAlert("The input is empty");
      return;
    }
    if (search.length < 3) {
      setAlert("The Search must have more than 3 letters");
      return;
    }
    setAlert(null);
    return;
  }, [search]);
  return { search, setSearch, alert };
}
