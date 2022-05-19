import { Permissions } from "@camberi/firecms";

/**
 * Map of role ID => role
 */
export type Roles = Record<string, Role>;

export type Role = {

    /**
     * If this flag is true, the user can perform any action
     */
    isAdmin?: boolean;

    /**
     * Default permissions for all collections for this role.
     * You can override this values at the collection level using
     * {@link collectionPermissions}
     */
    defaultPermissions?: Permissions;

    /**
     * Record of stripped collection paths
     * `products/B44RG6APH/locales` => `products::locales`
     * to their permissions.
     * @see stripCollectionPath
     */
    collectionPermissions?: Record<string, Permissions>;

}
