export default function duplicateRemove(reviews: Array<Record<string, any>>): Array<Record<string, any>> {
    const uniqueReviews = new Map();
    reviews.forEach(review => {
      uniqueReviews.set(review._id, review);
    });
    return Array.from(uniqueReviews.values());
  }