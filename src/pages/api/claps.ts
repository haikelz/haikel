import createClapsAPI from "@upstash/claps/api";

const ClapsAPI = createClapsAPI({ maxClaps: 8 });

export default ClapsAPI;
