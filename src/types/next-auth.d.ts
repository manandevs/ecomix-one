// Import Role from our central auth types to avoid duplication
import { Role } from './auth';

export {};

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Role;
    };
  }
}

// Role	      Description
// user	      Regular visitors who can browse and purchase products.
// seller	    Users who can sell products and manage their own inventory.
// moderator	Staff who can manage some parts of the site (e.g., content moderation).
// admin	    Full access to admin panel and site settings.
// manager	  Super admin or main manager with access to everything, including admin and seller operations.