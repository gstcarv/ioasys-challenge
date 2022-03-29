import { api } from '..';

export const EnterpriseService = {
    /**
     * Get enterprise by its identification
     * @param id enterprise's identification
     * @returns full enterprise data
     */
    getById: (id) => api.get('enterprises/' + id),

    /**
     * Search enterprises by its name
     * @param name name to search
     * @returns enterprises list result
     */
    searchByName: (name) => api.get('enterprises', { params: { name } }),
};
