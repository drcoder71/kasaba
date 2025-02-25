export const StandartNewsData = Array.from({ length: 10 }, (_, index) => ({
  id: `id-${index + 1}`,
  title: `O‘zbekiston Prezidenti BAA Vitse-prezidenti, Bosh vaziri bilan uchrashdi ${index}`,
  description: `Mamlakatimiz taraqqiyotining yangi bosqichida jamiyatda adolatni qaror toptirish, qonuniylikni mustahkamlash hamda inson...`,
  publishedAt: {
    date: "31 yanvar 2025",
    time: "15:14",
  },
  image: {
    src: "/img/image 5.png",
    alt: "yangilik",
  },
}));
