import createClapsAPI from "@upstash/claps/api";

const ClapsAPI = createClapsAPI({ maxClaps: 4 });

export default ClapsAPI;
