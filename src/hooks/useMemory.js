export const useMemory = () => {
  const collect = (id) => {
    const saved = JSON.parse(localStorage.getItem("kamy_memories") || "{}");
    if (!saved[id]) {
      saved[id] = true;
      localStorage.setItem("kamy_memories", JSON.stringify(saved));
      window.dispatchEvent(new CustomEvent("memory_found"));
      return true;
    }
    return false;
  };

  return { collect };
};
