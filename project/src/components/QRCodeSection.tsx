import React, { useState } from 'react';
import { Copy, ExternalLink, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

interface PaymentMethod {
  name: string;
  number: string;
  logoUrl: string;
  color: string;
  deepLink?: string;
}

const paymentMethods: PaymentMethod[] = [
  { 
    name: 'OVO',
    number: '082328535144',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg',
    color: 'from-[#4C3494] to-[#2F1C5A]',
    deepLink: 'ovo://scan?payment_type=transfer&amount={amount}&phone=082328535144'
  },
  { 
    name: 'GoPay',
    number: '081220010205',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg',
    color: 'from-[#00AED6] to-[#00887A]',
    deepLink: 'gojek://gopay/transfer?recipient_number=081220010205&amount={amount}'
  },
  { 
    name: 'DANA',
    number: '081220010205',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg',
    color: 'from-[#0081C9] to-[#006CB7]',
    deepLink: 'https://link.dana.id/qr/1z4pbwx'
  },
  { 
    name: 'ShopeePay',
    number: '081220010205',
    logoUrl: 'https://res.cloudinary.com/dcil8l2im/image/upload/v1748869857/SHOPPE_qsjlbd.png',
    color: 'from-[#EE4D2D] to-[#CB3F24]',
    deepLink: 'https://shp.ee/a/payment?phone=081220010205&amount={amount}'
  }
];

const mlbbInfo = {
  id: '1836849702',
  serverID: '18860'
};

const QRCodeSection: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);
  const [copied, setCopied] = useState<'number' | 'mlbb' | null>(null);

  const handleCopyNumber = async (type: 'number' | 'mlbb') => {
    try {
      const textToCopy = type === 'number' 
        ? selectedMethod.number 
        : `${mlbbInfo.id} (${mlbbInfo.serverID})`;
      
      await navigator.clipboard.writeText(textToCopy);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDeepLink = () => {
    if (!selectedMethod.deepLink || !amount) return;
    
    const formattedAmount = amount.replace(/\D/g, '');
    const url = selectedMethod.deepLink.replace('{amount}', formattedAmount);
    window.open(url, '_blank');
  };

  return (
    <section id="donate" className="section bg-ml-dark/30 rounded-xl backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-10">
          {/* Kolom Kiri - MLBB ID */}
          <div className="space-y-6">
            <motion.div 
              className="bg-ml-blue-dark/70 rounded-lg p-6 border border-ml-blue/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-6 w-6 text-ml-gold" />
                  <h3 className="text-xl font-bold text-ml-gold">MOBILE LEGENDS ID</h3>
                </div>
                <button
                  onClick={() => handleCopyNumber('mlbb')}
                  className="ml-button-gold py-2 px-4 flex items-center space-x-2"
                >
                  <Copy className="h-4 w-4" />
                  <span>{copied === 'mlbb' ? 'Tersalin!' : 'Salin'}</span>
                </button>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-ml-blue to-ml-blue-light p-6 group">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-bold mb-4 font-rajdhani">XAVIER GAMING</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-300">User ID</div>
                      <div className="text-xl font-medium font-rajdhani">{mlbbInfo.id}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-300">Server ID</div>
                      <div className="text-xl font-medium font-rajdhani">{mlbbInfo.serverID}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* OPTIONS VIP */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-xl font-bold mb-4 text-ml-gold">OPTIONS VIP</h3>
                <div className="space-y-4">
                  {[
                    { amount: '10K', reward: 'Jasa Gendong 1 Game' },
                    { amount: '5K', reward: 'Mabar 1 Game' },
                    { amount: '20K', reward: 'Mabar VIP - End Live' }
                  ].map((tier, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-ml-blue/20 to-ml-gold/20 p-4 rounded-lg flex items-center justify-between hover:from-ml-blue/30 hover:to-ml-gold/30 transition-all duration-300"
                    >
                      <div className="font-rajdhani font-bold text-xl text-ml-gold">
                        Rp {tier.amount}
                      </div>
                      <div className="text-gray-300">{tier.reward}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Kolom Kanan - Pembayaran */}
          <motion.div 
            className="bg-ml-blue-dark/70 rounded-lg p-6 border border-ml-blue/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-ml-gold">Pilih Metode Pembayaran</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {paymentMethods.map((method) => (
                <button 
                  key={method.name}
                  onClick={() => setSelectedMethod(method)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedMethod.name === method.name 
                      ? 'ring-2 ring-ml-gold' 
                      : 'hover:ring-2 hover:ring-ml-blue'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${method.color} p-4`}>
                    <div className="flex items-center justify-between">
                      <img 
                        src={method.logoUrl} 
                        alt={`${method.name} logo`}
                        className="h-8 w-auto"
                      />
                    </div>
                    <div className="text-sm opacity-75 mt-2">{method.number}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nominal Donasi (Rp)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Masukkan nominal donasi"
                  className="w-full px-4 py-2 bg-white/10 border border-ml-blue/30 rounded-lg focus:outline-none focus:border-ml-gold text-white"
                />
              </div>
              <button
                onClick={handleDeepLink}
                disabled={!amount}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg transition-all duration-300 ${
                  amount 
                    ? 'bg-gradient-to-r from-ml-gold to-ml-gold-dark text-ml-dark hover:from-ml-gold-dark hover:to-ml-gold' 
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
              >
                <ExternalLink className="h-5 w-5" />
                <span>Buka Aplikasi {selectedMethod.name}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeSection;
