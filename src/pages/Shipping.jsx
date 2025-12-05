import React from 'react'
import { Truck, Clock, MapPin, Info, AlertTriangle } from 'lucide-react'

export default function Shipping() {
    return (
        <div className='min-h-screen bg-black text-white'>
            <div className='max-w-4xl mx-auto px-4 py-12'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <div className='w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-6'>
                        <Truck className='w-10 h-10 text-black' />
                    </div>
                    <h1 className='text-4xl font-bold text-white mb-4'>Shipping & Delivery Policy</h1>
                    <p className='text-xl text-light-gray'>
                        Last updated: January 2025
                    </p>
                </div>

                {/* Content */}
                <div className='prose prose-invert max-w-none'>
                    <div className='bg-dark-gray rounded-lg p-8 mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                            <Clock className='w-6 h-6' />
                            Same-Time / Same-Day Delivery
                        </h2>
                        <div className='space-y-4 text-light-gray'>
                            <p>
                                For eligible digital products and notes purchased on SkillNotes, delivery is
                                processed instantly once your payment is confirmed. In most cases, your
                                content will be available in your account within a few seconds.
                            </p>
                            <ul className='list-disc list-inside space-y-2 ml-4'>
                                <li>Digital downloads are delivered immediately to your SkillNotes account.</li>
                                <li>Email confirmation with order details is sent at the same time.</li>
                                <li>If delivery is delayed more than 15 minutes, please contact support.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-dark-gray rounded-lg p-8 mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                            <MapPin className='w-6 h-6' />
                            Physical Shipping (If Applicable)
                        </h2>
                        <div className='space-y-4 text-light-gray'>
                            <p>
                                By default, SkillNotes focuses on digital content. If we offer any physical
                                products (such as printed notes or merchandise), the following conditions will
                                apply:
                            </p>
                            <ul className='list-disc list-inside space-y-2 ml-4'>
                                <li>Orders are typically processed within 1-2 business days.</li>
                                <li>Standard delivery time within India: 3-7 business days.</li>
                                <li>Tracking details will be shared via email where available.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-dark-gray rounded-lg p-8 mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                            <Info className='w-6 h-6' />
                            Order Confirmation & Access
                        </h2>
                        <div className='space-y-4 text-light-gray'>
                            <p>After a successful purchase, you will receive:</p>
                            <ul className='list-disc list-inside space-y-2 ml-4'>
                                <li>On-screen confirmation of your order.</li>
                                <li>An email with order ID and payment details.</li>
                                <li>Instant access to your purchased notes under the "My Purchases" section.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-dark-gray rounded-lg p-8 mb-8'>
                        <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-3'>
                            <AlertTriangle className='w-6 h-6' />
                            Delays and Issues
                        </h2>
                        <div className='space-y-4 text-light-gray'>
                            <p>
                                In rare cases, delivery may be delayed due to payment gateway issues,
                                connectivity problems, or technical errors.
                            </p>
                            <ul className='list-disc list-inside space-y-2 ml-4'>
                                <li>If you do not receive access within 15 minutes, please log out and log in again.</li>
                                <li>Check your email spam/junk folder for confirmation messages.</li>
                                <li>Contact our support team with your payment reference if the issue persists.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bg-dark-gray rounded-lg p-8 text-center'>
                        <h2 className='text-2xl font-bold text-white mb-4'>Contact for Shipping & Delivery</h2>
                        <p className='text-light-gray mb-6'>
                            If you have any questions about shipping or delivery, please reach out to us:
                        </p>
                        <div className='space-y-2'>
                            <p className='text-white'>Email: support@skillnotes.com</p>
                            <p className='text-white'>Phone: +91 6206957650</p>
                            <p className='text-white'>Address: Hostel-16, MMDU, Ambala, Haryana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
