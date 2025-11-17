const dummyReports = [
  {
    id: 'dummy-lampu-1',
    title: 'Lampu Jalan Mati di Jl. Merdeka',
    description:
      'Beberapa tiang lampu jalan di sepanjang Jl. Merdeka tidak menyala sejak beberapa hari lalu, menyebabkan area menjadi gelap pada malam hari dan mengurangi keamanan pejalan kaki.',
    damageLevel: 'minor',
    evidenceImages: ['/images/lampu-jalan-rusak.jpg'],
    location: {
      placeName: 'Jl. Merdeka (Depan Gereja)',
      latitude: -7.9750,
      longitude: 112.6310,
    },
    reporter: { name: 'Kepin' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), 
  },
  {
    id: 'dummy-jalan-1',
    title: 'Kondisi Jalan Rusak Parah di Jl. Pahlawan',
    description:
      'Permukaan jalan berlubang dan retak di beberapa titik Jl. Pahlawan, mengganggu arus lalu lintas dan berpotensi merusak kendaraan jika tidak diperbaiki segera.',
    damageLevel: 'moderate',
    evidenceImages: ['/images/jalan-rusak.jpg'],
    location: {
      placeName: 'Jl. Pahlawan (Samping Kantor Pos)',
      latitude: -7.9805,
      longitude: 112.6268,
    },
    reporter: { name: 'Cucun' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(), 
  },
  {
    id: 'dummy-pipa-1',
    title: 'Pipa Air Bocor di Kawasan Perumahan',
    description:
      'Terjadi kebocoran pipa distribusi air di kawasan perumahan sehingga menggenangi bahu jalan dan mengganggu pasokan air ke beberapa rumah di sekitar lokasi.',
    damageLevel: 'severe',
    evidenceImages: ['/images/pipa-rusak.jpg'],
    location: {
      placeName: 'Perumahan Suka Maju',
      latitude: -7.9790,
      longitude: 112.6350,
    },
    reporter: { name: 'Gojo' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), 
  },
  {
    id: 'dummy-drainase-1',
    title: 'Drainase Tersumbat di Area Pasar',
    description:
      'Saluran drainase di sekitar pasar utama tersumbat sampah sehingga sering menyebabkan genangan saat hujan deras; membutuhkan pembersihan dan perbaikan saluran.',
    damageLevel: 'moderate',
    evidenceImages: ['/images/drainase.jpg'],
    location: {
      placeName: 'Pasar Sentral',
      latitude: -7.9820,
      longitude: 112.6290,
    },
    reporter: { name: 'Alpin' },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(), 
  },
  {
    id: 'dummy-taman-1',
    title: 'Fasilitas Taman Rusak di Taman Kota',
    description:
      'Beberapa fasilitas taman (bangku dan penerangan) di Taman Kota mengalami kerusakan dan perlu perbaikan agar nyaman dan aman untuk pengunjung.',
    damageLevel: 'minor',
    evidenceImages: ['/images/taman-rusak.jpg'],
    location: {
      placeName: 'Taman Kota',
      latitude: -7.9775,
      longitude: 112.6302,
    },
    reporter: { name: 'Tipen' },
    createdAt: new Date().toISOString(), 
  },
];

export default dummyReports;
