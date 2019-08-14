import AppContent from 'src/app/Components/Content/AppContent'

/**
 * @param {Object} options
 * @returns {Object}
 */
export const userContent = (options = {}) => ({
  extends: AppContent,
  props: {
    styling: {
      type: Function,
      default: () => ({
        borderRadius: '0',
        ...options
      })
    }
  }
})
