<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enquire;
use App\Models\Contact;
use App\Models\Blog;
use App\Models\Workshop;
use Carbon\Carbon;

class DashboardController extends Controller
{
   public function index()
{
    // Total counts
    $enquiryCount = Enquire::count();
    $contactCount = Contact::count();
    $blogCount = Blog::count();
    $workshopCount = Workshop::count();

    // Get recent workshops with attendance data
     $workshops = Workshop::latest()
               ->take(5)
               ->get(['id', 'workshop_title as title', 'created_at as date', 'no_of_attendance']);

     $workshopLabels = $workshops->map(function($workshop) {
    return wordwrap($workshop->title, 20, "<br>", true);
});
          

    // Calculate max attendance for percentage calculations
    $maxAttendance = $workshops->max('no_of_attendance') ?: 1; // Avoid division by zero

    // Get data for the last 7 days, 4 weeks, and 5 months
    $dailyDates = [];
    $weeklyDates = [];
    $monthlyDates = [];
    
    // Generate date ranges
    for ($i = 6; $i >= 0; $i--) {
        $dailyDates[] = Carbon::now()->subDays($i)->format('Y-m-d');
    }
    
    for ($i = 3; $i >= 0; $i--) {
        $weeklyDates[] = Carbon::now()->subWeeks($i)->format('Y-\WW');
    }
    
    for ($i = 4; $i >= 0; $i--) {
        $monthlyDates[] = Carbon::now()->subMonths($i)->format('Y-m');
    }

    // ====== Enquiry Chart Data ======
    $enquiryDailyQuery = Enquire::selectRaw('DATE(created_at) as date, COUNT(*) as total')
        ->whereDate('created_at', '>=', Carbon::now()->subDays(6))
        ->groupBy('date')
        ->orderBy('date')
        ->pluck('total', 'date');

    $enquiryWeeklyQuery = Enquire::selectRaw('DATE_FORMAT(created_at, "%Y-\%W") as week, COUNT(*) as total')
        ->whereDate('created_at', '>=', Carbon::now()->subWeeks(3))
        ->groupBy('week')
        ->orderBy('week')
        ->pluck('total', 'week');

    $enquiryMonthlyQuery = Enquire::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, COUNT(*) as total')
        ->whereDate('created_at', '>=', Carbon::now()->subMonths(4))
        ->groupBy('month')
        ->orderBy('month')
        ->pluck('total', 'month');

    // Format data with zeros for missing dates
    $enquiryDaily = [];
    $enquiryWeekly = [];
    $enquiryMonthly = [];
    
    foreach ($dailyDates as $date) {
        $enquiryDaily[] = $enquiryDailyQuery[$date] ?? 0;
    }
    
    foreach ($weeklyDates as $week) {
        $enquiryWeekly[] = $enquiryWeeklyQuery[$week] ?? 0;
    }
    
    foreach ($monthlyDates as $month) {
        $enquiryMonthly[] = $enquiryMonthlyQuery[$month] ?? 0;
    }

    // ====== Contact Chart Data ======
    $contactDailyQuery = Contact::selectRaw('DATE(created_at) as date, COUNT(*) as total')
        ->whereDate('created_at', '>=', Carbon::now()->subDays(6))
        ->groupBy('date')
        ->orderBy('date')
        ->pluck('total', 'date');

    $contactWeeklyQuery = Contact::selectRaw('DATE_FORMAT(created_at, "%Y-\%W") as week, COUNT(*) as total')
        ->whereDate('created_at', '>=', Carbon::now()->subWeeks(3))
        ->groupBy('week')
        ->orderBy('week')
        ->pluck('total', 'week');

    $contactMonthlyQuery = Contact::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, COUNT(*) as total')
        ->whereDate('created_at', '>=', Carbon::now()->subMonths(4))
        ->groupBy('month')
        ->orderBy('month')
        ->pluck('total', 'month');

    // Format data with zeros for missing dates
    $contactDaily = [];
    $contactWeekly = [];
    $contactMonthly = [];
    
    foreach ($dailyDates as $date) {
        $contactDaily[] = $contactDailyQuery[$date] ?? 0;
    }
    
    foreach ($weeklyDates as $week) {
        $contactWeekly[] = $contactWeeklyQuery[$week] ?? 0;
    }
    
    foreach ($monthlyDates as $month) {
        $contactMonthly[] = $contactMonthlyQuery[$month] ?? 0;
    }

    return view('dashboard', [
        'enquiryCount' => $enquiryCount,
        'contactCount' => $contactCount,
        'blogCount' => $blogCount,
        'workshopCount' => $workshopCount,
        'workshops' => $workshops,
         'workshopLabels' => $workshopLabels,
        'maxAttendance' => $maxAttendance,
        'enquiryData' => [
            'daily' => $enquiryDaily,
            'weekly' => $enquiryWeekly,
            'monthly' => $enquiryMonthly,
            'dailyLabels' => array_map(function($date) {
                return Carbon::parse($date)->format('D');
            }, $dailyDates),
            'weeklyLabels' => array_map(function($week) {
                return 'Week '.(Carbon::parse(substr($week, 0, 10))->weekOfYear);
            }, $weeklyDates),
            'monthlyLabels' => array_map(function($month) {
                return Carbon::parse($month)->format('M');
            }, $monthlyDates)
        ],
        'contactData' => [
            'daily' => $contactDaily,
            'weekly' => $contactWeekly,
            'monthly' => $contactMonthly,
            'dailyLabels' => array_map(function($date) {
                return Carbon::parse($date)->format('D');
            }, $dailyDates),
            'weeklyLabels' => array_map(function($week) {
                return 'Week '.(Carbon::parse(substr($week, 0, 10))->weekOfYear);
            }, $weeklyDates),
            'monthlyLabels' => array_map(function($month) {
                return Carbon::parse($month)->format('M');
            }, $monthlyDates)
        ]
    ]);
}
}