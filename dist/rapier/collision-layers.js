export const PLAYER_GROUP = 0b0001;
export const GROUND_GROUP = 0b0010;
export const OBJECT_GROUP = 0b0100;
// Create interaction groups by shifting membership bits and combining with filter bits
// Format: (memberships << 16) | filters
// For Player: Should be member of PLAYER_GROUP and interact with GROUND_GROUP and OBJECT_GROUP
export const playerLayer = (PLAYER_GROUP << 16) | (GROUND_GROUP | OBJECT_GROUP);
// For Ground: Should be member of GROUND_GROUP and interact with PLAYER_GROUP and OBJECT_GROUP
export const groundLayer = (GROUND_GROUP << 16) | (PLAYER_GROUP | OBJECT_GROUP);
// For Ground: Should be member of OBJECT_GROUP and interact with ALL_GROUPS
export const objectLayer = (OBJECT_GROUP << 16) | (PLAYER_GROUP | GROUND_GROUP | OBJECT_GROUP);
